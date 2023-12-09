### Temp Endpoints
* Get the user
   * http://localhost:3000/users
* Get all properties
   * http://localhost:3000/property
* Get Single Proprty
   * http://localhost:3000/property/:id

* Get All reviews
   * http://localhost:3000/review



1. **User Authentication:**
   - `/api/auth/register` (POST)
   - `/api/auth/login` (POST)
   - `/api/auth/logout` (POST)

2. **Properties:**
   - `/api/properties` (GET, POST) - Fetch all properties, Add a new property
   - `/api/properties/:propertyId` (GET, PUT, DELETE) - Fetch, Update, Delete a specific property
   - `/api/properties/search` (GET) - Search properties based on title
   - `/api/properties/sort` (GET) - Sort properties based on price range

3. **User Profiles:**
   - `/api/users/:userId/profile` (GET, PUT) - Fetch and Update user profile information

4. **Reviews:**
   - `/api/reviews` (GET, POST) - Fetch all reviews, Add a new review
   - `/api/reviews/:reviewId` (DELETE) - Delete a specific review

5. **Agent Dashboard:**
   - `/api/agents/:agentId/properties` (GET) - Fetch properties added by a specific agent
   - `/api/agents/:agentId/sold-properties` (GET) - Fetch properties sold by a specific agent
   - `/api/agents/:agentId/requested-properties` (GET) - Fetch offers made for properties added by the agent

6. **Admin Dashboard:**
   - `/api/admin/properties` (GET) - Fetch all properties for admin management
   - `/api/admin/users` (GET) - Fetch all users for admin management
   - `/api/admin/reviews` (GET) - Fetch all reviews for admin management

