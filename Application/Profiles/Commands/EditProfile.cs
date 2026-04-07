using System;
using Application.Core;
using Application.Interfaces;
using Application.Profiles.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Profiles.Commands;

public class EditProfile
{
    public class Command: IRequest<Result<Unit>>
    {
        public required UserProfile userProfile { get; set; }
    }

    public class Handler(AppDbContext context, IUserAccessor userAccessor, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
    {
        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var userId = userAccessor.GetUserId();

            var User = await context.Users.FindAsync(userId, cancellationToken);

            if (User == null) return Result<Unit>.Failure("Cannot find user ID", 400);

            mapper.Map(request.userProfile, User);

            var result = await context.SaveChangesAsync(cancellationToken) > 0;
            if (!result) return Result<Unit>.Failure("Failed to update the user profile", 400);
            return Result<Unit>.Success(Unit.Value);
        }
    }
}
