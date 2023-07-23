using Application.Common.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationsController : ApiControllerBase
    {
        private readonly INotificationSettingsService _notificationSettingsService;

        public NotificationsController(INotificationSettingsService notificationSettingsService)
        {
            _notificationSettingsService = notificationSettingsService;
        }

        [HttpPost("Notifications")]
        public async Task<IActionResult> SaveNotificationSettings(NotificationSetting notificationSettings)
        {
            await _notificationSettingsService.SaveNotificationSettings(notificationSettings);

            return Ok();
        }
    }
}
