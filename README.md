# Toronto Fitness Club Website

An example fitness club website developed for CSC309 Web Development. Developed with React and Django.

## View gyms across Toronto
The home page will show you a map and all the studios near you, sorted by proximity. You can also filter these results. Clicking on a studio, you are able to see the specifics:
![image](https://user-images.githubusercontent.com/83253593/221393107-99961048-bdcd-4b80-8aa5-fcd01c38869e.png)

## Enrol in fitness classes, and view your calendar
You can enrol in fitness classes, and view your calendar:
![image](https://user-images.githubusercontent.com/83253593/221393150-458fe2a8-1777-47a8-984c-addd7944b992.png)

## Local development
Run the `startup.sh` script first to set up the environment. Then run the `run.sh` script to run the server. 

## Technical details
This project uses React for frontend and Django (REST Framework) for the backend. Stripe API is used in the backend to deal with credit card information. Google Maps API is used in the frontend to show the map with markers on the home page.
