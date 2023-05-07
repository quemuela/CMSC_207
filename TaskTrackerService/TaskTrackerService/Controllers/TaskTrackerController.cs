using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTrackerService.Model;

namespace TaskTrackerService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskTrackerController : ControllerBase
    {
        private readonly TaskTrackerDb _db = new TaskTrackerDb("Data Source=DADDYDESKTOP\\SQLEXPRESS;Initial Catalog=TaskTracker;Integrated Security=True;");

        [HttpGet(Name = "GetTaskModel")]
        public IEnumerable<TaskModel> Get()
        {
            return _db.GetAllTasks();
        }

        [HttpPost(Name ="PostTaskModel")]
        public void AddOrUpdateTaskModel(TaskModel newModel)
        {
            _db.AddOrUpdate(newModel);
        }
    }    
}
