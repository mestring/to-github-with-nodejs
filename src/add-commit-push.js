/// Declare a const to call and use package
const octokit = require('@octokit/rest');

// Authentication using username and password
//octokit.authenticate({
//    type: 'basic',
//    username: userName,
//    password: password
//});
// Variables for Repo name and description
//var repoDescription = "repo creation using git api";
//var folderName = "push-to-github-with-nodejs";
//Create a Repository online via Github Api
//const createGitHubRepo = await octokit.repos.create(
//   {folderName, repoDescription}
//);

// Simple-git without promise 
const simpleGit = require('simple-git')();
// Shelljs package for running shell tasks optional
const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')();

// change current directory to repo directory in local
shellJs.cd('../');
// Repo name
const repo = 'push-to-github-with-nodejs';  //Repo name
// User name and password of your GitHub
const userName = 'mestring';
const password = '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';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
simpleGit.addConfig('user.email','peter@mestringisystem.net');
simpleGit.addConfig('user.name','mestring');
// Add remore repo url as origin to repo
simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log(addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
        console.log(successCommit);
     }, (failed) => {
        console.log('failed commmit');
 });
// Finally push to online repository
 simpleGitPromise.push('origin','main')
    .then((success) => {
       console.log('repo successfully pushed');
    },(failed)=> {
       console.log('repo push failed');
    });
