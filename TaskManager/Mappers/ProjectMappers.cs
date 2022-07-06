using TaskManager.Models;
using TaskManager.DTOs;

namespace TaskManager.Mappers;


public static class ProjectMappers
{

    public static ProjectDTO ProjectToDTO(Project project) =>
        new ProjectDTO()
        {
            Id = project.Id,
            Name = project.Name,
            Description = project.Description,
            ClientId = project.Client?.Id, 
            PlantId = project.Plant?.Id,     
        };

    public static Project DTOToProject(ProjectDTO projectDTO, Client client, Plant plant) =>
        new Project
        {
            Name = projectDTO.Name,
            Description = projectDTO.Description,
            Client = client,  
            Plant = plant,  
           };    



}