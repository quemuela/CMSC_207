using System.Data.SqlClient;

namespace TaskTrackerService.Model
{
    public class TaskTrackerDb
    {
        private const string GetAllTasksCommand = "select id, title, description, status, raisedBy, assignee, startDate, endDate  from tasks";
        private const string InsertNewTaskCommand = "insert into tasks (title, description, raisedBy, assignee, startDate, endDate, status) values (@title,@description,@raisedBy,@assignee,@startDate,@endDate,@status)";
        private const string UpdateTaskCommand = "update tasks set title = @title, description = @description, status = @status, raisedBy = @raisedBy, assignee = @assignee, startDate = @startDate, endDate = @endDate where id = @id";
        private readonly string _connectionString;

        public TaskTrackerDb(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddOrUpdate(TaskModel taskModel)
        {
            if(taskModel.Id == -1)
            {
                InsertTaskModel(taskModel);
            }else
            {
                UpdateTaskModel(taskModel);
            }
        }

        private void CommonCommand(TaskModel taskModel, string commandString, bool update)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(commandString, connection))
                {
                    if (!update)
                    {
                        command.Parameters.Add(new SqlParameter("@id", taskModel.Id));
                    }                    
                    command.Parameters.Add(new SqlParameter("@title", taskModel.Title));
                    command.Parameters.Add(new SqlParameter("@description", taskModel.Description));
                    command.Parameters.Add(new SqlParameter("@raisedBy", taskModel.RaisedBy));
                    command.Parameters.Add(new SqlParameter("@assignee", taskModel.Assignee));
                    command.Parameters.Add(new SqlParameter("@startDate", taskModel.StartDate));
                    command.Parameters.Add(new SqlParameter("@endDate", taskModel.EndDate));
                    command.Parameters.Add(new SqlParameter("@status", taskModel.Status));

                    connection.Open();
                    command.ExecuteNonQuery();
                    connection.Close();
                }
            }
        }

        private void UpdateTaskModel(TaskModel taskModel)
        {
            CommonCommand(taskModel, UpdateTaskCommand, false);
        }

        private void InsertTaskModel(TaskModel taskModel)
        {
            CommonCommand(taskModel, InsertNewTaskCommand, true);
        }

        public IEnumerable<TaskModel> GetAllTasks()
        {
            var resultTasks = new List<TaskModel>();
            using (var connection = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(GetAllTasksCommand, connection))
                {

                    connection.Open();
                    var reader = command.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var taskModel = new TaskModel(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetString(3), reader.GetString(4), reader.GetString(5), reader.GetString(6), reader.GetString(7));
                            resultTasks.Add(taskModel);
                        }
                    }
                    reader.Close();
                    connection.Close();
                }
            }
            return resultTasks;
        }
    }
}