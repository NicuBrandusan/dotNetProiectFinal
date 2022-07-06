namespace TaskManager.Models

{
    public class Employee
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public int? Age { get; set; } 
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public virtual Project? Project { get; set; }
    }
}
