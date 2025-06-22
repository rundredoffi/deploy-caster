const axios = require('axios');

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json'
  }
});

async function createDeployment({ repo, ref, environment, description, log_url, state, deployed_url }) {
  const [owner, repoName] = repo.split('/');

  const deploymentRes = await githubAPI.post(`/repos/${owner}/${repoName}/deployments`, {
    ref,
    environment,
    description,
    auto_merge: false,
    required_contexts: []
  });

  const deploymentId = deploymentRes.data.id;

  const statusRes = await githubAPI.post(`/repos/${owner}/${repoName}/deployments/${deploymentId}/statuses`, {
    state: state || 'success',
    log_url,
    description: `Statut : ${state}`,
    environment_url: deployed_url || null
  });

  return {
    deployment: deploymentRes.data,
    status: statusRes.data
  };
}


module.exports = {
  createDeployment
};
