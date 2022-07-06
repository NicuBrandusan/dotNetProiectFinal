namespace TaskManager.DTOs

{
    public class EmployeeDTO
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public int? Age { get; set; } 
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public long? ProjectId { get; set; }
    }
}
