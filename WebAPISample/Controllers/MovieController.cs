using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext context;

        public MovieController()
        {
            context = new ApplicationDbContext();
        }

        // GET api/movie
        public IEnumerable<Movie> GetMovies()
        {
            return context.Movies.ToList();
        }

        // GET api/movies/1
        public Movie GetMovie(int id)
        {
            // Retrieve movie by id from db logic
            var movie = context.Movies.SingleOrDefault(m => m.Id == id);

            if (movie == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return movie;
        }

        // POST api/movies
        [HttpPost]
        public Movie CreateMovie(/*[FromBody]*/Movie movie)
        {
            // Create movie in db logic
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            context.Movies.Add(movie);
            context.SaveChanges();

            return movie;
        }

        // PUT api/movies/1
        [HttpPut]
        public void UpdateMovie(int id, /*[FromBody]string value*/ Movie movie)
        {
            // Update movie in db logic
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var movieInDb = context.Movies.SingleOrDefault(m => m.Id == id);

            if(movieInDb == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            movieInDb.Title = movie.Title;
            movieInDb.Genre = movie.Genre;
            movieInDb.DirectorName = movie.DirectorName;

            context.SaveChanges();
        }

        // DELETE api/movies/1
        public void DeleteMovie(int id)
        {
            // Delete movie from db logic
            var movieInDb = context.Movies.SingleOrDefault(m => m.Id == id);

            if (movieInDb == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            context.Movies.Remove(movieInDb);
            context.SaveChanges();
        }
    }

}