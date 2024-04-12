# Use an official Nginx image as a parent image
FROM nginx:latest

# Copy the static HTML, CSS, and JavaScript files to the default Nginx web root directory
COPY public /usr/share/nginx/html

# Expose port 80 (default HTTP port for Nginx)
EXPOSE 80

# Start Nginx when the container starts
CMD ["bash", "-c", "echo 'Nginx is mapped to port 8080' && nginx -g 'daemon off;'"]
