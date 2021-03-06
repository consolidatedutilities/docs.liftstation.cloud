# Add a Well Reading

## Description
This request allows you to enter a reading for a well, but only if a reading does not exist
for this date and well. To update a reading, please view the next page.

## Request

**Type / Endpoint:** `POST` `https://api.liftstation.cloud/v1/wells`

### Request Body
The request body is a JSON Object.

```json
{
    "pump": "5834450",
    "residual": "1.2",
    "wellId": "14",
    "date": "2021-06-07"
}
```

#### Properties
**Note:** Please send all numbers as strings (in quotes)

|property|type|notes|
|--------|----|-----|
|pump|int (in quotes)|Must conform to this regular expression `/^[0-9]{1,9}$/`|
|residual|double (in quotes) or null if there is no residual|Must conform to this regular expression: `/^[0-9]\.[0-9]$/`|
|wellId|int (in quotes)||
|date|date (in quotes)|'YYYY-MM-DD'|

## Response

### Status Code `201`
**Description:** The reading was stored in the database.
```json
{
  "success": true,
  "message": "Reading entered in database"
}
```

### Status Code `400`
**Description:** Invalid request body. Please refer to the message you receive for more details, as these can vary.
```json
{
  "success": true,
  "message": "Your residual is formatted incorrectly"
}
```

### Status Code `409`
**Description:** A reading already exists for the given date and well. Please see the next page, Update a Well Reading
to update an existing reading.
```json
{
  "success": false,
  "message": "A reading already exists for this date and well"
}
```


