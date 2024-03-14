const token = ''; // Put Token in here to test the tokens exp length

// Decode JWT token
const base64Url = token.split('.')[1];
const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
const payload = JSON.parse(atob(base64));
console.log('Decoded payload:', payload);

// Get expiration timestamp from payload
const expTimestamp = payload.exp;

// Get current timestamp (in seconds)
const currentTimestamp = Math.floor(Date.now() / 1000);

// Calculate remaining time until expiration (in seconds)
const remainingTime = expTimestamp - currentTimestamp;

// Convert remaining time to human-readable format
const remainingHours = Math.floor(remainingTime / 3600);
const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
const remainingSeconds = remainingTime % 60;

console.log(`Remaining time until expiration: ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
