package shoping_app.demo.dto;

import shoping_app.demo.models.Users;

public class UserDto {
    private String id;
    private String username;
    private String chart_id;
    private Users.Role role;
    public UserDto() {
    }

    public UserDto(String id, String username, String chart_id, Users.Role role) {
        this.id = id;
        this.username = username;
        this.chart_id = chart_id;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public Users.Role getRole() {
        return role;
    }

    public void setRole(Users.Role role) {
        this.role = role;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getChart_id() {
        return chart_id;
    }

    public void setChart_id(String chart_id) {
        this.chart_id = chart_id;
    }
}
