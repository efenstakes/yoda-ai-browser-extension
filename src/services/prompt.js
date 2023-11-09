const serverURL = 'https://xqwbyqql42.execute-api.us-west-1.amazonaws.com/prompts';


// gets the reply for the given prompt from yoda ai
export const getPrompt = async ({ prompt })=> {
    
    try {
    
        const request = await fetch(
            serverURL,
            {
                method: "POST",
                'Content-Type': 'application/json',
                body: JSON.stringify({ prompt, })
            }
        )
    
        const response = await request.json()
        console.log('====================================');
        console.log("response ", response);
        console.log('====================================');
    
        return response
    } catch (error) {
        
        console.log('====================================');
        console.log("error ", error);
        console.log('====================================');
        return null
    }
}
