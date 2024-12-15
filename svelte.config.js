import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter(),
        paths: {
            // Replace 'your-repo-name' with your GitHub repository name
            base: '/blog-site',
        },
    },
};