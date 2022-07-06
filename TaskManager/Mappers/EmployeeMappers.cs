using TaskManager.Models;
using TaskManager.DTOs;

namespace TaskManager.Mappers;

public static class EmployeeMappers
{

    public static EmployeeDTO EmployeeToDTO(Employee employee) =>
        new EmployeeDTO()
        {
            Id = employee.Id,
            Name = employee.Name,
            Age = employee.Age,
            Email = employee.Email,
            PhoneNumber = employee.PhoneNumber,
            ProjectId = employee.Project?.Id,      
        };

    public static Employee DTOToEmployee(EmployeeDTO employeeDTO, Project project) =>
        new Employee
        {
            Name = employeeDTO.Name,
            Age = employeeDTO.Age,
            Email = employeeDTO.Email,
            PhoneNumber = employeeDTO.PhoneNumber,
            Project = project,    
           };    



}