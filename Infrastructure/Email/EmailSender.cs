using System;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Resend;

namespace Infrastructure.Email;

public class EmailSender(IServiceScopeFactory scopeFactory) : IEmailSender<User>
{
    public async Task SendConfirmationLinkAsync(User user, string email, string confirmationLink)
    {
        var subject = "Confirm you email address";
        var body = $@"
            <p>Hi {user.DisplayName}</p>
            <p>Please confirm you email by clicking the link below</p>
            <a href='{confirmationLink}'>Click here to verify your email</a>
            <p>Thanks</p>
        ";

        await SendEmailAsync(email, subject, body);
    }

    private async Task SendEmailAsync(string email, string subject, string body)
    {
        using var scope = scopeFactory.CreateScope();
        var resend = scope.ServiceProvider.GetRequiredService<IResend>();
        var message = new EmailMessage
        {
            From = "whatever@resend.dev",
            Subject = subject,
            HtmlBody = body
        };
        message.To.Add(email);

        Console.WriteLine(message.HtmlBody);

        await resend.EmailSendAsync(message);
        await Task.CompletedTask;
    }

    public Task SendPasswordResetCodeAsync(User user, string email, string resetCode)
    {
        throw new NotImplementedException();
    }

    public Task SendPasswordResetLinkAsync(User user, string email, string resetLink)
    {
        throw new NotImplementedException();
    }
}
