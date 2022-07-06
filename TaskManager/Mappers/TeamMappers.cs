using TaskManager.Models;
using TaskManager.DTOs;

namespace TaskManager.Mappers;

public static class TeamMappers
{

    public static TeamDTO TeamToDTO(Team team) =>
        new TeamDTO()
        {
            Id = team.Id,
            Name = team.Name,
            Department = team.Department,
                      
        };

    public static Team DTOToTeam(TeamDTO teamDTO) =>
        new Team
        {
            Name = teamDTO.Name,
            Department = teamDTO.Department,
           };    



}