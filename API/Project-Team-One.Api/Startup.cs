using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Project.Team.One.Data;

namespace jet.piranha.Api
{
     public class Startup
     {
        public void ConfigureServices (IServiceCollection services)
        {
          services.AddControllers (); 
          services.AddEndpointsApiExplorer();
          services.AddSwaggerGen();
        // services.AddDbContext<StoreContext>(options =>
        //      options.UseSqlite("Data Source=. /Registrar.sqlite", 
        //          => b.MigrationsAssembly("jet.piranha.Api")));
            services. AddCors(options=>
            {
                options.AddDefaultPolicy(builder =>
                {
                builder.WithOrigins("htttp:localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader();
                });
            });
        }
    }
}
