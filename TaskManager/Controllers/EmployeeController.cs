using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Models;
using TaskManager.DTOs;
using TaskManager.Mappers;
using System.Data.SqlClient;
using System.Data;
using System.Text;

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly TaskManagerContext _context;

        public EmployeeController(TaskManagerContext context)
        {
            _context = context;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDTO>>> GetEmployees()
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
          var query = _context.Employees.AsQueryable();

            // return await _context.Employees.ToListAsync();
            return await query.Select(employee => EmployeeMappers.EmployeeToDTO(employee)).ToListAsync();
        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeDTO>> GetEmployee(long id)
        {
          if (_context.Employees == null)
          {
              return NotFound();
          }
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return EmployeeMappers.EmployeeToDTO(employee);
        }

        // PUT: api/Employee/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(long id, EmployeeDTO employeeDTO)
        {
            if (id != employeeDTO.Id)
            {
                return BadRequest();
            }

            // _context.Entry(employeeDTO).State = EntityState.Modified;
            var employee = await _context.Employees.FindAsync(id);

            employee.Name = employeeDTO.Name;
            employee.Age = employeeDTO.Age;
            employee.Email = employeeDTO.Email;
            employee.PhoneNumber = employeeDTO.PhoneNumber;


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employee
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeDTO>> PostEmployee(EmployeeDTO employeeDTO)
        {
          if (_context.Employees == null)
          {
              return Problem("Entity set 'TaskManagerContext.Employees'  is null.");
          }
          var project = _context.Projects.FindAsync(employeeDTO.ProjectId).Result;
          var employee = EmployeeMappers.DTOToEmployee(employeeDTO, project);
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                "GetEmployee", 
                new { id = employee.Id },
                EmployeeMappers.EmployeeToDTO(employee));
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(long id)
        {
            if (_context.Employees == null)
            {
                return NotFound();
            }
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("[action]")]
        public IActionResult Export() {
            using (SqlConnection connection = new SqlConnection("Data Source=DESKTOP-6FFSRVT\\SQLEXPRESS;Initial Catalog=TaskManager;Integrated Security=True")) {
                connection.Open();
                using(SqlCommand command = new SqlCommand("Select * from dbo.Employees", connection)){
                    using(SqlDataAdapter adapter = new SqlDataAdapter(command)){
                        DataSet ds = new DataSet();
                        adapter.Fill(ds);
                        string csvData = TransformTableToCsv(ds.Tables[0]);

                        var fileBytes = Encoding.UTF8.GetBytes(csvData);
                        return File(fileBytes, "text/csv", "EmployeeData.csv");
                    }
                }
            }
        }

        private string TransformTableToCsv(DataTable dataTable) {
            StringBuilder csvBuilder = new StringBuilder();
            IEnumerable<string> columnNames = dataTable.Columns.Cast<DataColumn>().Select( x => x.ColumnName);
            csvBuilder.AppendLine(string.Join(',', columnNames));
            foreach(DataRow row in dataTable.Rows) {
                IEnumerable<string> fields = row.ItemArray.Select
                (x => string.Concat("\"", x.ToString().Replace("\"", "\"\""), "\""));
                csvBuilder.AppendLine(string.Join(',', fields));
            }
            return csvBuilder.ToString();
        }

        private bool EmployeeExists(long id)
        {
            return (_context.Employees?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
