Level 4 Reflection: Flexbox vs Grid

For level, I worked on creating a Taskflow Dashboard using both Flexbox and css Grid. the goal was to create a Holy Grail layout with a fixed header, navigation bar, left sidebar, flexible main content, right sidebar, task cards, and a three-column footer. I also added simple Javascript interactions for the user menu and collapsing the sidebars.

for the flexbox versionx, Iused 'display: flex' to arrange the main sections of the page. The left and right sidebars have fixed sizes while the main content uses the available space. I also used 'flex-grow', 'flex-shrink', and 'flex-basis to control how elements change when the screen size changes. The task cards use 'flex-wrap' which allows them to move to a new row when there is not enough space.
 
for Grid version i used 'display: grid' to create the main Holy Grail structure using grid areas. I used columns for the left sidebar, main content, and right sidebar. I also used 'auto-fit' and 'minmax()' for the task cards so they can automatically adjust to different screen sizes.

I found Flexbox easier to understand when arranging elements in one direction, such as navigation links, buttons, and task cards. However, Grid was more intuitive for the overrall page structure because it allowed me to control rows and columns together. Flexbox also required  fewer layout rules for some smaller components, while grid made the main dashboard structure easier to organize.

I would choos Flexbox when working with smaller one dimensional layouts and grid when creating larger two dimensional page layouts. When i was working on both versions it helped me understand that Flexbox and Grid are not competing technologies, but tools that can be used together depending on the layout requirements.