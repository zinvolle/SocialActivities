using System;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Resend;

namespace Infrastructure.Email;

public class EmailSender(IServiceScopeFactory scopeFactory, IConfiguration config) : IEmailSender<User>
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
        // await Task.CompletedTask;
    }

    public async Task SendPasswordResetCodeAsync(User user, string email, string resetCode)
    {
        var subject = "Reset your password";
        var body = $@"
            <p>Hi {user.DisplayName}</p>
            <p>Please click this link to reset your password</p>
            <a href='{config["ClientAppUrl"]}/reset-password?email={email}&code={resetCode}'>Reset your password</a>
            <p>If you did not request this, you can ignore this email</p>
        ";
        
        await SendEmailAsync(email, subject, body);
    }

    public Task SendPasswordResetLinkAsync(User user, string email, string resetLink)
    {
        throw new NotImplementedException();
    }
}
