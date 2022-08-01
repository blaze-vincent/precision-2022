<h1>Precision Coatings Website Redesign 2022</h1>
<article>
  <h2>Why I'm Making This</h2>
  <ul>
    <li>
    <b>The old website got hacked.</b>
    <p>The hack messed up the database, forcing me to realize my setup process for the database was too hands-on. This time around, I will make it simple to set up the database so if it gets hacked again, fixing it won't be so painful.
    </p>
    </li>
    <li>
    <b>The design got old.</b>
    <p>I learn a little more about design with every new project. Instead of fixing up a website that uses a dated design, I figured this is a good opportunity to freshen things up.</p>
    <li>
    <b>I like CSS-in-JS now.</b>
    <p>Separating the CSS into its own file for each component made it difficult to follow. Flipping back and forth between component code and associated CSS files created more hassle than the organization boost warrants. Using low-level CSS required coming up with a new name for every class, which surely cumulatively occupied several hours. Utilizing the utility classes of Tailwind not only avoids both of these issues, but reduces the amount of CSS shipped.</p>
    </li>
    <li>
    <b>I know more about semantic markup now</b>
    </li>
  </ul>
</article>
<article>
  <h2>How to get it running</h2>
  <aside>
    <p>
      These instructions are a work-in-progress. They may be incomplete.
    </p>
  </aside>
  <ol>
    <li>
      <p>
        Change the api user credentials defined in <code>docker-entrypoint-initdb.d > init-mongo.js</code>. 
      </p>
    </li>
    <li>
      <p>
        Update .env with the the following information:
      </p>
      <ul>
        <li>
          <p>
            Api user credentials for Mongo connection: MONGODB_API_URI
          </p>
        </li>
        <li>
          <p>
            Secret for signing session cookies: SESSION_SECRET
          </p>
        </li>
        <li>
          <p>
            Secret for account passwords
          </p>
        </li>
      </ul>
    </li>
    <li>
      <p>
        Start the Mongo database with <code>docker-compose up</code>.
      </p>
    </li>
    <li>
      <p>
        Run <code>npm install</code>, then <code>npm run build</code>.
      </p>
    </li>
    <li>
      <p>
        Finally, run <code>npm run start</code>
      </p>
    </li>
  </ol>
</article>