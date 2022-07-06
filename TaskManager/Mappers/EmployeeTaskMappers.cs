using TaskManager.Models;
using TaskManager.DTOs;

namespace TaskManager.Mappers;

public static class EmployeeTaskMappers
{

    public static EmployeeTaskDTO EmployeeTaskToDTO(EmployeeTask employeeTask) =>
        new EmployeeTaskDTO()
        {
            Id = employeeTask.Id,
            Title = employeeTask.Title,
            Duration = employeeTask.Duration,
            Summary = employeeTask.Summary,
            Status = employeeTask.Status,
        //    EmployeeId = employeeTask.Employee?.Id,      
        };

    public static EmployeeTask DTOToEmployeeTask(EmployeeTaskDTO employeeTaskDTO)  =>//,Employee employee)
        new EmployeeTask
        {
            Title = employeeTaskDTO.Title,
            Duration = employeeTaskDTO.Duration,
            Summary = employeeTaskDTO.Summary,
            Status = employeeTaskDTO.Status,
        //    Employee = employee,
           };    



}