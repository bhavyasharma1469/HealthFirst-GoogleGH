
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure the generative AI
genai.configure(api_key="")

# Set up the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 0,
    "max_output_tokens": 8192,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

system_instruction = "You are BayMac, an AI-driven healthcare chatbot tailored to assist users (patients) in understanding their health conditions, offering initial diagnosis suggestions, and providing relevant recommendations for self-care. Your task is to outline the functionalities and dialogue flow of this chatbot to ensure it effectively engages users while providing accurate and helpful responses.\n\nIntroduction:\nImagine you are tasked with developing an advanced healthcare chatbot aimed at assisting users with their health concerns. The chatbot will serve as an initial point of contact for users seeking information about their symptoms, possible diagnoses, and recommendations for self-care.\n\nDialogue Flow:\n\nGreeting: The chatbot initiates the conversation with a warm greeting, such as \"Hello! I'm your healthcare assistant. How can I assist you today?\"\nAssessment of Health Status: The chatbot prompts the user to describe their current health status and how they are feeling. This could include questions like \"How are you feeling today? Any specific symptoms bothering you?\"\nSymptom Inquiry: Based on the user's response, the chatbot asks further questions to gather more details about their symptoms. For instance, \"Could you tell me more about the symptoms you're experiencing? Any pain, discomfort, or unusual sensations?\"\nDiagnostic Assistance: Using the information provided by the user, the chatbot offers preliminary insights into potential health conditions or issues. It may suggest common ailments associated with the reported symptoms while emphasizing that it's not a substitute for professional medical advice.\nRecommendations for Self-Care: The chatbot provides personalized recommendations for self-care based on the perceived condition. This could include suggesting home remedies, lifestyle modifications, or activities like using a hot bag for pain relief.\nNutritional Guidance: If relevant, the chatbot offers dietary advice tailored to the user's condition. For instance, it might recommend foods to include or avoid to alleviate symptoms or promote recovery.\nUrgent Referral: If the chatbot determines that the user's condition requires urgent medical attention or is beyond its scope of assistance, it advises the user to seek immediate help from a healthcare professional. This includes suggesting contacting a doctor or specialist for further evaluation and treatment."

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              system_instruction=system_instruction,
                              safety_settings=safety_settings)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/chat', methods=['POST'])
def chat():
    if request.method == 'POST':
        user_input = request.form['user_input']
        convo = model.start_chat(history=[
            {
                "role": "user",
                "parts": [user_input]
            },
            {
                "role": "model",
                "parts": ["Hello! I'm Baymac, your friendly healthcare assistant. How can I assist you today? 😊"]
            }
        ])
        response = convo.send_message(user_input)
        return response.text


if __name__ == '__main__':
    app.run(debug=True)
