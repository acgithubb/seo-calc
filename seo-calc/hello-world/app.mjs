export const lambdaHandler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    };

    try {
        const requestBody = JSON.parse(event.body);

        if (requestBody.competitiveness !== undefined) {
            // Map competitiveness level to the corresponding score
            let score;
            if (requestBody.competitiveness === "Low") {
                score = 1;
            } else if (requestBody.competitiveness === "Medium") {
                score = 2;
            } else if (requestBody.competitiveness === "High") {
                score = 3;
            } else {
                response.statusCode = 400;
                response.body = JSON.stringify({ error: 'Invalid competitiveness level' });
            }

            // Calculate the estimated cost
            const estimatedCost = score * 30;

            response.body = JSON.stringify({ estimatedCost });
        } else {
            response.statusCode = 400;
            response.body = JSON.stringify({ error: 'Request must include competitiveness' });
        }
    } catch (error) {
        response.statusCode = 400;
        response.body = JSON.stringify({ error: 'Invalid JSON format in the request' });
    }

    return response;
};
