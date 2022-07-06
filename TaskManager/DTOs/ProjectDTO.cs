namespace TaskManager.DTOs


{
    public class ProjectDTO
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; } 
        public long? ClientId { get; set; }
        public long? PlantId { get; set; }
    }
}