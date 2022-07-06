namespace TaskManager.Models

{
    public class EmployeeTask
    {
        public long Id { get; set; }
        public string? Title { get; set; }
        public int? Duration { get; set; } 
        public string? Summary { get; set; }
        public string? Status { get; set; }
        // public Employee? Employee { get; set; }
    }
}
