namespace api.Helpers
{
    public class QueryObject
    {
        public string? Symbol { get; set; } = null;
        public string? CompanyName { get; set; } = null;
        public string? StortBy { get; set; } = null;
        public bool IsDecsending { get; set; } = false;

        /// <summary>
        /// Page Number for Pagination
        /// </summary>
        public int PageNumber { get; set; } = 1;

        /// <summary>
        /// Page Size for Pagination
        /// </summary>
        public int PageSize { get; set; } = 20;
    }
}