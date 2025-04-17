import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Development.css';

const Development = () => {
    const [lastHoveredId, setLastHoveredId] = useState('allergeat'); // Default to Allerg-Eat's description

    useEffect(() => {
        const titles = document.querySelectorAll('.dev-page .project-titles');
        const descriptions = document.querySelectorAll('.dev-page .description');

        const showDescription = (id) => {
            descriptions.forEach((desc) => {
                if (desc.id === id) {
                    desc.classList.add('active');
                } else {
                    desc.classList.remove('active');
                }
            });

            titles.forEach((title) => {
                if (title.getAttribute('data-target') === id) {
                    title.classList.add('selected-title');
                } else {
                    title.classList.remove('selected-title');
                }
            });
        };

        showDescription(lastHoveredId);

        titles.forEach((title) => {
            title.addEventListener('mouseover', function () {
                descriptions.forEach((desc) => desc.classList.remove('active'));

                const targetId = this.getAttribute('data-target');
                const targetDesc = document.getElementById(targetId);
                if (targetDesc) {
                    targetDesc.classList.add('active');
                    setLastHoveredId(targetId);
                    showDescription(targetId);
                }
            });

            title.addEventListener('mouseout', function () {
                showDescription(lastHoveredId);
            });
        });
    }, [lastHoveredId]);

    return (
        <div className="dev-page">
            <div className="dev-page top-buttons">
                <Link to="/" className="top-button home">Home</Link>
                <Link to="/projects" className="top-button projects">Projects</Link>
                <Link to="/about" className="top-button about">About</Link>
            </div>
            <h1>Behind the Scenes: Development</h1>

            <div className="dev-page container">
                <div className="dev-page left-container">
                    <div className="dev-page project-header red-highlight">Projects</div> <br /><br />
                    <div className="dev-page project-titles" data-target="allergeat">Allerg-Eat</div>
                    <div className="dev-page project-titles" data-target="carbcons">Carbon Conscious</div>
                    <div className="dev-page project-titles" data-target="site">Personal Portfolio</div>
                    <div className="dev-page project-titles" data-target="dinnerparty">Dinner Party</div> 
                </div>
                <div className="dev-page divider"></div>
                <div className="dev-page right-container">
                    <div className="title-allrgeat description" id="allergeat">
                        <div className="project-header underline">Allerg-Eat</div>
                        <p className="tech-details">
                            <em>ML Model: Python, Pandas, scikit-learn, NumPy, NLTK, Gensim, Pytorch<br />
                            App Development: Flask, Node.js, React.js, Figma</em>
                        </p>
                        <div className="concept-details">
                            <h2>The Concept</h2>
                            <p>As someone who had many restrictions and health issues that made it hard to find recipes that met my dietary needs, I envisioned Allerg-Eat as a tool to alleviate the problem. Allerg-Eat is a recipe recommendation system tailored specifically for individuals with food allergies and dietary restrictions.</p>
                            <p>My model takes in a user's allergy information and cravings, which are then used to create a personalized ranked list of recipes. Using fundamental techniques in ML and NLP, Allerg-Eat filters through thousands of recipes to ensure that you can find meals that are both safe and delicious.</p>
                            <h3>Data Formatting</h3>
                            <ul>
                                <li><strong className="red-highlight">Loading Data:</strong> I loaded the raw recipe data from a JSON file using pd.read_json. The data is then transposed to switch rows and columns for proper alignment.</li>
                                <li><strong className="red-highlight">Resetting Index:</strong> I reset the index to have a proper integer-based index and drop the first column which might contain irrelevant data.</li>
                                <li><strong className="red-highlight">Cleaning Ingredients List:</strong> The ingredient_parser function processes each ingredient list to remove stop words, measurement words, accents, and converts them to their base forms for consistency.</li>
                                <li><strong className="red-highlight">Ingredient Parsing:</strong> The function processes each ingredient string by splitting, filtering, and normalizing text, and removes unnecessary words to prepare a clean list of ingredients.</li>
                            </ul>
                            <h3>Ingredient Grouping</h3>
                            <p>In this step, the ingredients are grouped and processed to understand their semantic relationships.</p>
                            <ul>
                                <li><strong className="red-highlight">Grouping Ingredients:</strong> Here, I joined the cleaned ingredient lists into single strings for each recipe. This helps in further processing steps where each recipe is treated as a document for natural language processing.</li>
                            </ul>
                            <p>I used the Word2Vec model to generate vector representations of the ingredients.</p>
                            <ul>
                                <li><strong className="red-highlight">Training Word2Vec:</strong> The Word2Vec model is trained on the cleaned ingredient lists. I used the Continuous Bag of Words (CBOW) approach to understand the context of each ingredient and create vector representations.</li>
                                <li><strong className="red-highlight">Average Vector Calculation:</strong> This function calculates the average vector representation for each recipe by averaging the vectors of its ingredients.</li>
                            </ul>
                            <h3>Similarity Ranking</h3>
                            <p>I used cosine similarity to rank the recipes based on user preferences.</p>
                            <ul>
                                <li><strong className="red-highlight">Cosine Similarity Calculation:</strong> This function calculates the cosine similarity between two vectors to determine how similar they are.</li>
                                <li><strong className="red-highlight">Ranking Function:</strong> This function ranks the recipes based on the user's allergies and cravings. It adjusts the reference vector according to the user's cravings and calculates the cosine similarity for each recipe. The similarity score is then adjusted based on the presence of allergens.</li>
                            </ul>
                            <h3>In Progress</h3>
                            <p>I am currently building the CBOW (Continuous Bag of Words) approach to the Word2Vec model from scratch using a neural network. The data preparation involves cleaning ingredient lists, creating a corpus of sentences, and generating CBOW pairs. The CBOWModel class defines a neural network with an embedding layer and a linear layer. The vocabulary is created from unique words in the ingredient list, and sequences of words are converted into indices. The model is initialized with the vocabulary size and embedding size, and trained using CrossEntropyLoss and SGD optimizer. After training, the word embeddings are extracted and stored in a dictionary for further use.</p>
                            <h3>Next Steps</h3>
                            <ul>
                                <li><strong className="red-highlight">User Feedback Integration:</strong> Incorporate user feedback to refine the recommendation algorithm and improve the accuracy of the ranked recipes.</li>
                                <li><strong className="red-highlight">Personalized Meal Plans:</strong> Introduce personalized meal plans that consider not just allergies and cravings but also nutritional requirements and dietary goals.</li>
                                <li><strong className="red-highlight">Mobile App Development:</strong> Develop a mobile application to make Allerg-Eat accessible on-the-go, providing real-time recipe recommendations based on user location and preferences.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="title-carbcons description" id="carbcons">
                        <div className="project-header underline">Carbon Conscious</div>
                        <p className="tech-details">
                            <em>Database: SQL, MySQL, GCP, BigQuery<br />
                            App Development: HTML/CSS, JavaScript, Express.js, VSCode, Git, Figma</em>
                        </p>
                        <div className="concept-details">
                            <h2>The Concept</h2>
                            <p>Over the course of 6 months, my team worked on developing our web application CarbonConscious, aiming to analyze sustainability practices in corporate settings and provide valuable feedback to our users. Our app allows users to input the emissions data for 
                                either their specific building or their company as a whole and then are given a comprehensive examination of their environmental contribution. Through the use of graph visuals and interactive elements, CarbonConscious empowers businesses to make informed 
                                decisions toward a greener future.</p>
                            <h3>Database Organization</h3>
                            <ul>
                                <li>We started by creating a Unified Modeling Language (UML) diagram to map out the relationships between various entities in our data. This was the blueprint for our database schema, allowing us to visualize how the data interacts within our system.</li>
                                <img src="images/UML diagram.png" alt="UML Diagram" style={{ display: 'block', margin: '10px 0', width: '400px', height: 'auto' }} />
                                <li>Relational schema representation:</li>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Company</u><br />
                                        CompanyId: INT [PK]<br />
                                        CompanyName: VARCHAR(30)<br />
                                        LocationId: INT<br />
                                        ElectricityConsumption: DECIMAL<br />
                                        GasConsumption: DECIMAL<br />
                                        RenewableConsumption: DECIMAL<br />
                                        CO2Emissions: DECIMAL<br />
                                        NitrogenEmissions: DECIMAL
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Building</u><br />
                                        BuildingId: INT [PK]<br />
                                        CompanyId: INT [FK to Company.CompanyId]<br />
                                        LocationId: INT [FK to Location.LocationId]<br />
                                        ElectricityConsumption: DECIMAL<br />
                                        GasConsumption: DECIMAL<br />
                                        RenewableConsumption: DECIMAL<br />
                                        CO2Emissions: DECIMAL<br />
                                        NitrogenEmissions: DECIMAL
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>User</u><br />
                                        username: VARCHAR(30) [PK]<br />
                                        password: VARCHAR(30)<br />
                                        CompanyId: INT [FK to Company.CompanyId]
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Location</u><br />
                                        LocationId: INT [PK]<br />
                                        Temperature: INT
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Product</u><br />
                                        ProductId: INT [PK]<br />
                                        ProductName: VARCHAR(30)<br />
                                        Department: VARCHAR(20)<br />
                                        CompanyId: INT [FK to Company.CompanyId]<br />
                                        Quantity: INT
                                    </div>
                                </div>
                            </ul>
                            <h3>Hosting the Database</h3>
                            <ul>
                                <li>To host our database, we leveraged the capabilities of Google Cloud Platform (GCP). This provided us with a reliable, scalable, and secure environment for our application. Specifically, we created our own Virtual Machine (VM) on GCP, which allowed us to have full control over the configuration and management of our database. </li>
                                <li>We chose MySQL as our database management system due to its robustness and widespread adoption. MySQL's features, such as ACID compliance and support for complex queries, made it an ideal choice for handling our emissions data. By hosting MySQL on a GCP VM, we could easily scale our resources based on demand, ensuring that our application remained performant even as the volume of data grew.</li>
                                <img src="images/mySQL connection.png" alt="mySQL connection" style={{ display: 'block', margin: '10px 0', width: '550px', height: 'auto' }} />
                                <li>To set up the tables in MySQL, we used Data Definition Language (DDL) code:</li>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Company</u><br />
                                        CREATE TABLE Company (
                                        CompanyId INT UNSIGNED,
                                        CompanyName VARCHAR(30),
                                        LocationId INT,
                                        ElectricityConsumption INT,
                                        GasConsumption INT,
                                        RenewableConsumption INT,
                                        CO2Emissions INT,
                                        NitrogenEmissions INT,
                                        PRIMARY KEY(CompanyId))
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Building</u><br />
                                        CREATE TABLE Building (
                                        BuildingId INT,
                                        CompanyId INT UNSIGNED,
                                        ElectricityConsumption INT,
                                        GasConsumption INT,
                                        RenewableConsumption INT,
                                        CO2Emissions INT,
                                        NitrogenEmissions INT,
                                        PRIMARY KEY(BuildingId),
                                        FOREIGN KEY(CompanyId) REFERENCES Company(CompanyId),
                                        FOREIGN KEY(LocationId) REFERENCES Location(LocationId))
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>User</u><br />
                                        CREATE TABLE User (
                                        username VARCHAR(30),
                                        password VARCHAR(30),
                                        CompanyId int UNSIGNED,
                                        PRIMARY KEY (username),
                                        FOREIGN KEY (CompanyId) REFERENCES Company (CompanyId))
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Location</u><br />
                                        CREATE TABLE Location (
                                        LocationId INT,
                                        Temperature INT,
                                        PRIMARY KEY (LocationId))
                                    </div>
                                    <div style={{ border: '1px solid #4E0C0C', padding: '10px', width: 'calc(20% - 30px)', fontSize: '12px' }}>
                                        <u>Product</u><br />
                                        CREATE TABLE Product (
                                        ProductId INT,
                                        ProductName VARCHAR(30),
                                        Quantity INT,
                                        Department VARCHAR(20),
                                        CompanyId INT UNSIGNED,
                                        PRIMARY KEY(ProductId),
                                        FOREIGN KEY(CompanyId) REFERENCES Company(CompanyId))
                                    </div>
                                </div>
                            </ul>
                            <h3>Planning: Possible Queries and Indexing</h3>
                            <p>We wrote four possible advanced queries that could be useful for the purpose of our application:</p>
                            <ol>
                            <li><strong className="red-highlight">Compare company emission contribution in the same location</strong>
                                <ul>
                                <li>Calculates total emissions for each company within a specific location and determines each company's percentage contribution to the total emissions of that location.</li>
                                <li>Helps identify the most significant contributors to emissions within a shared area.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Total Emissions</strong>
                                <ul>
                                <li>Calculates total energy consumption and total emissions for each company by combining data from both company-wide and building-specific records.</li>
                                <li>Provides a comprehensive view of each company's overall environmental impact.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Energy Ranking</strong>
                                <ul>
                                <li>Calculates an energy rating for each company by taking into account both negative factors (such as energy consumption and emissions) and positive factors (such as renewable energy usage).</li>
                                <li>Ranks companies based on their overall environmental performance.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Compare post-feedback</strong>
                                <ul>
                                <li>Compares the total energy consumption and emissions of companies before and after implementing feedback from CarbonConscious.</li>
                                <li>Identifies if there has been any reduction in consumption or emissions post-feedback.</li>
                                </ul>
                            </li>
                            </ol>
                            <p>In order to enhance the performance of our queries, particularly the post-feedback query, we implemented indexing strategies. This optimization process involved several iterations, where we analyzed the cost impacts of different indexing approaches using the EXPLAIN ANALYZE command.</p>
                            <p>A look into MySQL indexing:</p>
                            <img src="images/indexing.png" alt="mySQL indexing" style={{ display: 'block', margin: '10px 0', width: '600px', height: 'auto' }} />
                            <p>To enhance the functionality and maintainability of our database, we incorporated code for triggers and stored procedures → Automate routine tasks and encapsulate complex queries, leading to better performance and easier management.</p>
                            <h3>Implementation</h3>
                            <p><strong className="red-highlight">Backend</strong></p>
                            <ul>
                                <li><strong>Language:</strong> JavaScript</li>
                                <li><strong>Framework:</strong> Express.js</li>
                                <li><strong>Handle server-side operations: managing user authentication, processing user requests, and interacting with the database</strong></li>
                            </ul>
                            <p><strong className="red-highlight">Frontend</strong></p>
                            <ul>
                                <li><strong>Language:</strong> HTML/CSS</li>
                                <li><strong>Tools: Figma (design), VSCode (development)</strong></li>
                                <li>Create structure of the application, with stylistic elements to enhance user interaction and experience</li>
                            </ul>
                            <p><strong className="red-highlight">SQL Integration</strong></p>
                            <ul>
                                <li>Integrated the total emissions and energy ranking SQL queries into the backend code to interact with our database</li>
                            </ul>
                            <h3>Functionalities</h3>
                            <p>By combining a robust backend with an intuitive frontend, CarbonConscious offers a comprehensive solution for businesses to monitor and enhance their sustainability practices.</p>
                            <ul>
                            <li><strong className="red-highlight">Log In Page</strong>
                                <ul>
                                    <li>Users can log in with their credentials to access the application.</li>
                                    <li>Secure authentication mechanisms are implemented to protect user data.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Change username/password</strong>
                                <ul>
                                    <li>Users have the option to update their username or password.</li>
                                    <li>This feature ensures that users can maintain the security of their accounts.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Delete account</strong>
                                <ul>
                                    <li>Users can delete their accounts if they no longer wish to use the service.</li>
                                    <li>This action removes all associated data from the database, ensuring privacy and compliance with data protection regulations.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Data Entry for Emissions</strong>
                                <ul>
                                    <li>Users can input emissions data for either their specific building or their entire company.</li>
                                    <li>This data is stored in the database and used for analysis.</li>
                                </ul>
                            </li>
                            <li><strong className="red-highlight">Results Page</strong>
                                <ul>
                                    <li>Displays the total emissions for the user's building or company.</li>
                                    <li>Shows the user's performance through graph visuals.</li>
                                    <li>Provides suggestions for reducing emissions based on the data entered.</li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="title-personal-portfolio description" id="site">
                        <div class="project-header underline">Personal Portfolio</div>
                        <p class="tech-details">
                            <em>App Development: HTML/CSS, JavaScript, Three.JS, VSCode, Git, Figma</em>
                        </p>
                        <div class="concept-details">
                            <h2>Planning</h2>
                            <ul>
                                <li><strong class="highlight-text">Figma:</strong> Utilized for designing wireframes and creating visual representations of the website's layout and structure.</li>
                                <li><strong class="highlight-text">Google Docs:</strong> Used for planning the creative elements of the text, such as font, size, style, and layout.</li>
                            </ul>
                            <h2>Implementation Elements</h2>
                            <ul>
                                <li><strong class="highlight-text">HTML:</strong> Provided the structure of the web pages, including elements such as webpage layout, interactive images, etc.</li>
                                <li><strong class="highlight-text">CSS:</strong> Applied styles to HTML elements, including colors, fonts, and responsive design.</li>
                                <li><strong class="highlight-text">JavaScript + Three.JS:</strong> Implemented custom functionalities and transitions to add interactivity and dynamic behavior to the website.</li>
                            </ul>
                            <h2>Home Page</h2>
                            <ul>
                                <li><strong class="highlight-text">HTML/CSS:</strong> Uses basic design elements to transform the mockup into an interactive webpage, with cursor functionalities, drop-down functionalities, and a clear color scheme.</li>
                                <li><strong class="highlight-text">Three.JS:</strong> Implemented a dynamic animation of particles using Three.js. The scene features a rotating group of 1500 semi-transparent spheres, creating a visually engaging but simple background effect.</li>
                                <li><strong class="highlight-text">Mock-up vs. Actual:</strong> Because of the inclusion of the background animation, I chose to simplify the layout and design elements to ensure that viewers are not overwhelmed. The final design prioritizes a cleaner look to complement the dynamic background to maintain readability and the user's experience.</li>
                                <li><strong class="highlight-text">To-do:</strong> make the home page more professional and eye-catching by adding interactive hover functionalities using JS.</li>
                            </ul>
                            <div class="image-comparison">
                                <div class="image-container">
                                    <p><strong>Figma Mockup:</strong></p>
                                    <img src="images/HP mockup.png" alt="Homepage mockup" />
                                </div>
                                <div class="image-container">
                                    <p><strong>Actual:</strong></p>
                                    <img src="images/portfolio_figma.png" alt="Homepage actual" />
                                </div>
                            </div>
                            
                            <h2>About Page</h2>
                            <ul>
                                <li>To ensure a smooth transition from page #1 to page #2 (and page #2 to page #3), I integrated JavaScript seamlessly into the HTML files. This implementation enables sliding-out and fading-out transitions, enhancing the user experience with fluid navigation. These transitions not only provide a visually appealing pathway to the next page but also ensure that the shift between pages with contrasting colors remains gentle and easy on the eyes.</li>
                            </ul>
                            <div class="image-comparison">
                                <div class="image-container">
                                    <p><strong>Figma Mockup:</strong></p>
                                    <img src="images/SWE mockup.png" alt="swe mockup"/>
                                    <img src="images/PHIL mockup.png" alt="phil mockup"/>
                                </div>
                                <div class="image-container">
                                    <p><strong>Actual:</strong></p>
                                    <img src="images/SWE actual.png" alt="swe actual"/>
                                    <img src="images/PHIL actual.png" alt="phil actual"/>
                                </div>
                            </div>

                            <ul>
                                <li>While the original mockup of the "About" section was initially much simpler, I wanted to incorporate my personality into this section to emphasize the information provided about myself. The silhouette showcases a blend of design skills while also representing two of my interests in my fields of study: the philosophic study of the mind and the use of neural networks in ML.</li>
                                <li>I also chose images to represent my technical skills rather than simply listing them in tables. This approach is more visually appealing and faster to digest the breadth of my knowledge.</li>
                            </ul>

                            <div class="image-comparison">
                                <div class="image-container">
                                    <p><strong>Figma Mockup:</strong></p>
                                    <img src="images/about mockup.png" alt="about mockup" class="large-image"/>
                                </div>
                                <div class="image-container">
                                    <p><strong>Actual:</strong></p>
                                    <img src="images/about actual1.png" alt="about actual 1"/>
                                    <img src="images/about actual2.png" alt="about actual 2"/>
                                </div>
                            </div>
                            
                            <h2>Project Page</h2>
                            <ul>
                                <li>This page showcases different projects, each with its own description and implementation details. Each project is presented with an image and a brief overview, and clicking on it scrolls to the corresponding details. The page incorporates smooth scrolling functionality using JavaScript to enhance the user experience. Additionally, the design employs CSS for styling and layout, ensuring a visually appealing presentation.</li>
                            </ul>
                            <div class="image-comparison">
                                <div class="image-container">
                                    <p><strong>Figma Mockup of Overview:</strong></p>
                                    <img src="images/apps mockup.png" alt="apps mockup"/>
                                    <img src="images/overview mockup.png" alt="overview mockup"/>
                                </div>
                                <div class="image-container">
                                    <p><strong>Actual Overview:</strong></p>
                                    <img src="images/overview actual.png" alt="overview actual"/>
                                </div>
                            </div>
                            <div class="image-comparison">
                                <div class="image-container">
                                    <p><strong>Figma Mockup of Project Descriptions:</strong></p>
                                    <img src="images/descriptions mockup.png" alt="descriptions mockup"/>
                                </div>
                                <div class="image-container">
                                    <p><strong>Actual Project Descriptions:</strong></p>
                                    <img src="images/descriptions actual.png" alt="descriptions actual"/>
                                </div>
                            </div>
                            <h2>Other Features</h2>
                            <ul>
                                <li>I integrated a navigation bar with links to the home page (“Home”), projects page (“Projects”), and the About Me page (“About”) to allow users to easily navigate between different sections of the website, enhancing user accessibility and usability.</li>
                                <li>I also attached my resume, providing users with direct access to detailed and more concise information about my qualifications, experience, and skills, enhancing their understanding of my professional background and expertise.</li>
                            </ul>
                            <h2>Takeaways</h2>
                            <ul>
                                <li>Trial and error to figure out what is visually appealing and how to translate rough sketches into functional web pages</li>
                                <li>Clear planning and creative stimulation are necessary for web page development</li>
                                <li>Growing familiarity with HTML/CSS and JavaScript and the many uses in UI/UX spaces</li>
                            </ul>
                        </div>
                    </div>
                    <div class="title-personal-portfolio description" id="dinnerparty">
                        <div class="project-header underline">Dinner Party</div>
                        <p class="tech-details">
                            <em> App Development: React Native/Expo, TypeScript, JavaScript, Android Studio, Git, Figma </em>
                        </p>
                        <div class="concept-details">
                            <h2>Development Process: A slideshow</h2>
                            <ul>
                                <li><strong class="highlight-text"></strong>This slideshow goes through the process of our six month development phase, from our user research to our lo-fi and hi-fi prototypes, as well as our takeaways from this experience.</li>
                            </ul>
                            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTxQ_rxob7Qr5RM3AtYpcSiJ16jTkWWfMyR-yAnEyamqHhtQT_jgNf-O5uwj5ikkojMnNHViImarnMa/embed?start=false&loop=false&delayms=3000" frameborder="0" width="768" height="455.2" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;                    