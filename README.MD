<h1>Quiz Maker Tutorial</h1>
<h2>Tutorial-02 - Installing and running</h2>
In this tutorial we will install <b>Express</b> by adding it to our dependencies in package.json, and run it on port 3001.
<h3>Objectives</h3>
<ol>
	<li>Install <b>Express</b></li>
	<li>Make a minimal server and run it</li>
	<li>Install and use <b>nodemon</b> for development</li>
</ol>

To follow along upto to this point, do the following:
<ol>
	<li>Open a command line prompt in the directory created in tutorial-01 ( We will call it root directory 	form now on ) </li>.
	<li>Enter the command [ <code>npm install --save express</code> ].</li>
	<li>Create a new file in the root directory and name it [ server.js ].</li>
	<li>Copy the content you see in [server.js] in this repository to your [server.js] file and save.</li>
	<li>You can now start your <b>Express</b> server by running the command [ <code>node server.js</code> ].</li>
	<li>For development we recommend using <b>nodemon</b> to start the server since it will watch your files and restart the server when you made changes. Install it globally by running the command [ <code>npm install -g nodemon</code> ] then simply run [ <code>nodemon server.js</code> ]. </li>
	<li>We would like to stage and commit our changes but we need to exclude the [node_modules] directory since we do not want to add it to our repository. We can do this by adding a .gitignore file to the root directory. Go ahead and create [ .gitignore ] file and copy into it the content you can find <a href="https://github.com/github/gitignore/blob/master/Node.gitignore">here</a></li>
	<li>Stage and commit 
		<ol>
			<li><code>git add .</code></li>
			<li><code>git commit -m "Install Express and add server file"</code></li>
		</ol>
	</li>
</ol>
