<template>
    <div class="not-found">
        <div class="error-content">
            <h1 class="error-code">404</h1>
            <h2 class="error-title">Page Not Found</h2>
            <p class="error-message">
                The page you're looking for doesn't exist.
            </p>
            <RouterLink to="/" class="home-link">
                Go Back Home
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 20px;
}

.error-content {
    text-align: center;
    max-width: 500px;
}

.error-code {
    font-size: 6rem;
    font-weight: bold;
    color: #e74c3c;
    margin: 0;
    line-height: 1;
}

.error-title {
    font-size: 2rem;
    color: #2c3e50;
    margin: 20px 0 10px 0;
}

.error-message {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 30px;
}

.home-link {
    display: inline-block;
    padding: 12px 24px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.home-link:hover {
    background-color: #2980b9;
}
</style>