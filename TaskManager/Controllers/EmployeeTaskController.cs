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

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeTaskController : ControllerBase
    {
        private readonly TaskManagerContext _context;

        public EmployeeTaskController(TaskManagerContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeTask
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeTaskDTO>>> GetEmployeeTasks()
        {
          if (_context.EmployeeTasks == null)
          {
              return NotFound();
          }
        var query = _context.EmployeeTasks.AsQueryable();
        return await query.Select(employeeTask => EmployeeTaskMappers.EmployeeTaskToDTO(employeeTask)).ToListAsync();

        }

        // GET: api/EmployeeTask/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeTaskDTO>> GetEmployeeTask(long id)
        {
          if (_context.EmployeeTasks == null)
          {
              return NotFound();
          }
            var employeeTask = await _context.EmployeeTasks.FindAsync(id);

            if (employeeTask == null)
            {
                return NotFound();
            }

            return EmployeeTaskMappers.EmployeeTaskToDTO(employeeTask);;
        }

        // PUT: api/EmployeeTask/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployeeTask(long id, EmployeeTaskDTO employeeTaskDTO)
        {
            if (id != employeeTaskDTO.Id)
            {
                return BadRequest();
            }

            // _context.Entry(employeeTaskDTO).State = EntityState.Modified;
            var employeeTask = await _context.EmployeeTasks.FindAsync(id);

            employeeTask.Title = employeeTaskDTO.Title;
            employeeTask.Duration = employeeTaskDTO.Duration;
            employeeTask.Summary = employeeTaskDTO.Summary;
            employeeTask.Status = employeeTaskDTO.Status;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeTaskExists(id))
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

        // POST: api/EmployeeTask
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeTaskDTO>> PostEmployeeTask(EmployeeTaskDTO employeeTaskDTO)
        {
          if (_context.EmployeeTasks == null)
          {
              return Problem("Entity set 'TaskManagerContext.EmployeeTasks'  is null.");
          }
        //   var employee = _context.Employees.FindAsync(employeeTaskDTO.EmployeeId).Result;
          var employeeTask = EmployeeTaskMappers.DTOToEmployeeTask(employeeTaskDTO); //employee);
 
            _context.EmployeeTasks.Add(employeeTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                "GetEmployeeTask", 
                new { id = employeeTask.Id }, 
                EmployeeTaskMappers.EmployeeTaskToDTO(employeeTask));
        }

        // DELETE: api/EmployeeTask/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeTask(long id)
        {
            if (_context.EmployeeTasks == null)
            {
                return NotFound();
            }
            var employeeTask = await _context.EmployeeTasks.FindAsync(id);
            if (employeeTask == null)
            {
                return NotFound();
            }

            _context.EmployeeTasks.Remove(employeeTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeTaskExists(long id)
        {
            return (_context.EmployeeTasks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
