namespace TaskTrackerService.Model
{
    public interface ITaskModel
    {
        int Id { get; }
        string Title { get; }
        string Description { get; }
        string Status { get; }
        string RaisedBy { get; }
        string Assignee { get; }
        string StartDate { get; }
        string EndDate { get; }
    }
}