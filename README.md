# Pubhub - GA Project Three

My third dev project for the Software Engineering Immersive course, a complex MERN stack app built with GA classmates [Olivia Flynn](https://github.com/oliviafpersonal), [Jesse Edwards](https://github.com/JEdwardsK) and [Artilla Arslan](https://github.com/Atilla-Arslan).

The app has been deployed with Heroku and is available [here](https://pubhub-new.herokuapp.com/)

We decided as a group to base our site on Airbnb, but instead of houses and apartments, the site is based around pubs.

## Brief & Timeframe:
- Build a full-stack application by making your own backend and your own front-end
- Use an Express API to serve your data from a Mongo database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design
- Be deployed online so it's publicly accessible

Timeframe: 8 days

## Technologies Used:
- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript (ES6)
- React.js
- Axios
- Git + GitHub
- Bulma CSS Framework

APIs Used:
- Mapbox
- Cloudinary

## App Flow

The home page, where the user can locate around the site, register and login, search for pubs, or see all pubs in a specific region.

<img width="1439" alt="Pubhub Homepage" src="https://imgur.com/10auOuC.png">
<img width="1439" alt="Pubhub Homepage" src="https://imgur.com/SbqBQSu.png">

The user can see all pubs listed in a specific city, like London, Cardiff, Leeds, Manchester, in the pub index page. There is a helpful map, used from Mapbox, that demostrates where each pub is. If the user wants to find a pub that has outside seating, serves food, shows sports, or pet friendly, they can filter the pubs.

<img width="1439" alt="Pub Index" src="https://imgur.com/58M1Mvy.png">

If the user wishes to find out more information of the pub they can click to the oub showpage which will have information about the pub, reviews and comments, and also similiar pubs within that region.

<img width="1439" alt="Pub Showpage" src="https://imgur.com/BRX62wB.png">

If the user logins and registered, they can review, addd commnets and add pubs to their saved list.

<img width="1439" alt="SAved pubs" src="https://imgur.com/GsGBvSa.png">

If the user has a pub of their own that they wish to add to the site to be advertised and reviewd, they can login and register as a landlord.

<img width="1439" alt="Landlord page" src="https://imgur.com/kYeZFLt.png">

They can add the address and details of their pub.

<img width="1439" alt="Landlord register" src="https://imgur.com/1dOC2zL.png">

Specify if it has outside seating, serves food etc.

<img width="1439" alt="Landlord register" src="https://imgur.com/iWrmb7x.png">

Useing Cloudinary, the user is allowed to add a photo of thewir pub.

<img width="1439" alt="Landlord register" src="https://imgur.com/tnpqQKF.png">

Once added and shared, their pub will now be added to the pub index page.

<img width="1439" alt="Pub added my landlord" src="https://imgur.com/dSSoIZS.png">

## Functionality
The functionality is similar to Airbnb. Users can:

- Register & login 
- Search for pubs in London, Cardiff, Leeds, and Manchester
- Save, review and comment on pubs
- Become a Landlord and add pubs

## Process

After receiving the brief, my team started out by brainstorming different ideas on what we wanted to do for our project. We realised it would be best to copy a site and base ours on it. we agreed on Airbnb because we like its functionality and its design, and we can implement the Mapbox api into ours similiar to how Airbnb use their map to display house/apartments. Seeing as we were in the middle of the pandemic and missed going the pub, we agree to base our site on them and adapt it to be like Airbnb.

We began by planning and pseudo coding. We wanted to have a full desciptive plan before beginning and set deadlines each day to keep on track.
```
# PubHub API Documentation
## PUBS
### Schema
All of the pub objects have the following data structure:

```javascript
{
  nameOfPub: { type: String, required: true }, \br
  address: {
    line1: { type: String, required: true },
    line2: { type: String },
    town: { type: String },
    city: { type: String, required: true },
    postCode: { type: String, required: true, maxlength: 10 }
  },
  description: { type: String },
  isOutsideSeating: { type: Boolean, required: true },
  isPetFriendly: { type: Boolean, required: true },
  isFoodServed: { type: Boolean, required: true },
  isLiveSports: { type: Boolean, required: true },
  image: { type: String, required: true }
}

### Get all Pubs( Index Route)
  - request type: get
  - url: _localhost:4000/api/pubs_
  - data target: list of all pubs

### Get single Pub (Show Route)
  - request type: get
  - url: _localhost:4000/api/pubs/:id_
  - data target: shows pub with matching id from _id

example:

localhost:4000/api/pubs/605b83662d9baa3672c1dede

javascript
{
  _id: 605b83662d9baa3672c1dede,
  nameOfPub: Southampton Arms,
  address: {
    line1: 139 Highgate Rd,
    city: London,
    postCode: NW5 1LE
  },
  description: ’The sign outside announces ‘ale, cider, meat’, and that pretty much sums up what’s on offer at the best pub in Gospel Oak. The interior might make you think it’s still 1936, as would the cash-only policy. The addition of cheese and charcuterie boards to the offering of meaty bar snacks is about as modern as it gets here. The roster of lovingly tended ales and ciders, all from small independent producers, changes regularly. There’s also mulled cider. One of the many great things about the Southampton is that it retains its mixed clientele, long-time residents and newcomers alike – and of all ages. There’s also a pub dog. This is a true local hero.’,
  isOutsideSeating: false,
  isPetFriendly: true,
  isFoodServed: true,
  isLiveSports: false,
  image: https://beersmanchester.files.wordpress.com/2013/05/southampton-arms4.jpg,
  __v: 0
}
### Add One Pub (Create Route)
	- request type: post
	- url: _localhost:4000/api/pubs/_
	- data target: adds new pub to database

Must meet the minimum required structure above to create correctly.

### Edit Pub (Update Route)
	- request type: put
	- url: _localhost:4000/api/pubs/:id_ 
	- data target: update with specific id

Must meet the minimum required structure above to edit correctly.


### Delete Pub (Delete Route)
	  - request type: delete
	  - url: localhost:4000/api/pubs/:id
	  - data target: deletes pub with matching id
	  
## Users
Users have the following data structure:

There are two types of users:
  1. Regular users
  2. Landlords
This is dependant on whether the 

### Schema
All of the user objects have the following data structure:

javascript
{
  username: { type: String, required: true, unique: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordConfirmation: { must match password }
  profileImage: { type: String },
  isLandlord: { type: Boolean },
  isFirstTime: { type: Boolean }
}
  
### Get all User( Index Route)
  - request type: get
  - url: _localhost:4000/api/users_
  - data target: list of all user

### Get single User (Show Route)
  - request type: get
  - url: _localhost:4000/api/users/:id_
  - data target: shows user with matching id from _id

example:

localhost:4000/api/pubs/605d259727a418b61ac9e8c2

 javascript
{
  _id: 605d264f1902e3b6dc9b041d,
  username: wehwje,
  email: test@test,
  profileImage: image,
  isLandlord: true,
}
 
### Add One Show (Create Route)
	- request type: post
	- url: _localhost:4000/api/shows/_
	- data target: adds new show to database

Must meet the minimum required structure above to create correctly.

### Edit Show (Update Route)
	- request type: put
	- url: _localhost:4000/api/shows/:id_ 
	- data target: update with specific id

Must meet the minimum required structure above to edit correctly.

### Delete Show (Delete Route)
	  - request type: delete
	  - url: localhost:4000/api/shows/:id
	  - data target: deletes show with matching id
```
We also created a trello board to help keep on track of things and designate jobs for each person.

<img width="1439" alt="Trello" src="https://imgur.com/2sP0lLk.png">

By day 2 we were happy with our wireframes and began working on our backend, creating models, controllers, and routes. I created an initial seeds file and added a load of pubs.

Then each of us started working on our respective areas of responsibility - this involved getting through heaps of documentation. Any problems a team member struggled to overcome, we would all troubleshoot collaboratively to sort them out as efficiently as possible.

## Division of work

For the division of work, we had every awareness that the workload would be bigger than anything that we'd build before. So we decided the best way to about it would be that all of us should be Full Stack Engineers and take full ownership of their respective area of responsibility - some of the more substantial tasks were assigned to multiple team members so we could solve big challenges quicker. Working this way we hoped to prevent any hurdles related to pipelines, to secure that our product would be ready in the timeframe given, and everyone would get the optimal learning experience from building a fullstack app. Everyone had their part in each area of the app, but my personal contribution to the project included building the Map functionality and implementing interactive maps with Mapbox's React-Map-GL package, then adding it to the index page.

```
const Map = () => {
  const [popup, setPopup] = useState(null)
  const [pubs, setPubs] = useState(null)
  const { city } = useParams()
  const [viewport, setViewport] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    zoom: 11,
  })
  const viewportParams = (params) =>{
    if (params === 'london') {
      setViewport({
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 11,
      })
    } else if (params === 'manchester') {
      setViewport({
        latitude: 53.483959,
        longitude: -2.244644,
        zoom: 11,
      })
    } else if (params === 'cardiff') {
      setViewport({
        latitude: 51.481583,
        longitude: -3.179090,
        zoom: 11,
      })
    }
  }
  useEffect(() => {
    viewportParams(city)
  }, [])
  useEffect(() => {
    const getPubs = async () => {
      const { data } = await axios.get('/api/pubs')
      setPubs(data)
    }
    getPubs()
  }, [])

  if (!pubs) return null
  
  const pubsWithLocation = pubs.map(pub => {
    for (let i = 0; i < locationData.length; i++) {
      if (locationData[i].name === pub.nameOfPub) {
        pub.latitude = locationData[i].latitude
        pub.longitude = locationData[i].longitude
      }
    }
    return pub
  })
```

## Known bugs and errors
- When a pub is added by a landlord, it sometimes erros when trying to emter the showpage
- Login and register can sometimes be buggy, but rarely

## Wins and Challenges
I found working as a part of a team very beneficial, collaborative work seemed to amp up my delivery and code quality to a whole another level and the encouraging team spirit keep our collective work to a high standard. Really proud of how it turned out, it has a lot of functionality with very few errors

There was a challenge on the last day. Had errors on the index page when a landlord added a new pub. we realised that the Mapbox was trying to render it on the map but the new pub didn't have a longitude or latitude so that crashed the page. We wrote some code to prevent it from trying to render a pub if it didnt have the coordinates. maybe a future feature could be to allow landlords to write in the logitude and latitude of their pubs so it can appear on the map.

## Future Features
- Add user interaction so they can visit other users and landlord's profiles 
- Adjust the pub seeds, some photos are poor quality or too large
- Add more seeds across the UK

## Key learnings
Very proud of this project, largest group I've worked in for a project but I felt we all got a long and communicated well. Obviously working in a team of 4 had its challenges, and I learnt a lot about the importance of standups and regular communication. Having each team member taking ownership of their respective area of responsibility. Greatful that we did such a strong plan at the beginning everyone knew their jobs, and any struggles we came across we were able to help eachother.
