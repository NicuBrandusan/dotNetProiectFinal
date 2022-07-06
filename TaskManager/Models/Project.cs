namespace TaskManager.Models

{
    public class Project
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public Client? Client { get; set; }
        public Plant? Plant { get; set; }
    }
}