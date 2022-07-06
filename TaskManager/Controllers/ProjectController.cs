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
    public class ProjectController : ControllerBase
    {
        private readonly TaskManagerContext _context;

        public ProjectController(TaskManagerContext context)
        {
            _context = context;
        }

        // GET: api/Project
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDTO>>> GetProjects()
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
          var query = _context.Projects.AsQueryable();

            // return await _context.Projects.ToListAsync();
        return await query.Select(project => ProjectMappers.ProjectToDTO(project)).ToListAsync();

        }

        // GET: api/Project/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDTO>> GetProject(long id)
        {
          if (_context.Projects == null)
          {
              return NotFound();
          }
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }

            return ProjectMappers.ProjectToDTO(project);
        }

        // PUT: api/Project/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject(long id, ProjectDTO projectDTO)
        {
            if (id != projectDTO.Id)
            {
                return BadRequest();
            }

            // _context.Entry(project).State = EntityState.Modified;
            var project = await _context.Projects.FindAsync(id);

            project.Name = projectDTO.Name;
            project.Description = projectDTO.Description;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
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

        // POST: api/Project
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(ProjectDTO projectDTO)
        {
          if (_context.Projects == null)
          {
              return Problem("Entity set 'TaskManagerContext.Projects'  is null.");
          }
          
          var client = _context.Clients.FindAsync(projectDTO.ClientId).Result;
          var plant = _context.Plants.FindAsync(projectDTO.PlantId).Result;
          var project = ProjectMappers.DTOToProject(projectDTO, client, plant);

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                "GetProject",
                new { id = project.Id },
                ProjectMappers.ProjectToDTO(project));
        }

        // DELETE: api/Project/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(long id)
        {
            if (_context.Projects == null)
            {
                return NotFound();
            }
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectExists(long id)
        {
            return (_context.Projects?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
