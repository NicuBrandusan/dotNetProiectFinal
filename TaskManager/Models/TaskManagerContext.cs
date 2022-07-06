using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TaskManager.Models
{
    public class TaskManagerContext: DbContext
    {
        private readonly IConfiguration configuration;

        public TaskManagerContext(DbContextOptions<TaskManagerContext> options, IConfiguration configuration)
            : base(options)
        {
            this.configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(this.configuration.GetConnectionString("TaskManagerConnection"));
        }

        public DbSet<Team> Teams { get; set; } = null!;
        public DbSet<Client> Clients { get; set; } = null!;
        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Plant> Plants { get; set; } = null!;
        public DbSet<Project> Projects { get; set; } = null!;
        public DbSet<EmployeeTask> EmployeeTasks { get; set; } = null!;
    }
}