using api.Data;
using api.Interfaces;
using api.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string connectionString = "server=localhost;user=root;password=thutasann2002tts;database=dotnet_stock_db;port=3306;SslMode=none;Allow User Variables=true;";

// ------ Services
builder.Services.AddDbContext<ApplicationDBContext>(options => {
    options.UseMySQL(connectionString);
});

builder.Services.AddScoped<IStockRepository, StockRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
