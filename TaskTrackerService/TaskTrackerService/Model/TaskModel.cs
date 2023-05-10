namespace TaskTrackerService.Model
{
    public class TaskModel : ITaskModel
    {
        public TaskModel(int id, string title, string description, string status, string raisedBy, string assignee, string startDate, string endDate, string sprint)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
            RaisedBy = raisedBy;
            Assignee = assignee;
            StartDate = startDate;
            EndDate = endDate;
            Sprint = sprint;
        }

        public int Id { get; }

        public string Title { get; }

        public string Description { get; }

        public string Status { get; }

        public string RaisedBy { get; }

        public string Assignee { get; }

        public string StartDate { get; }

        public string EndDate { get; }

        public string Sprint { get; }
    }
}