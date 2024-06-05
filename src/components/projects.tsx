import '../styles/projects.css'
import Card from '../components/projectCard'
import glucometerImg from '../assets/images/project_glucometer_img.jpg'
import urlShortnerImg from '../assets/images/project_URL_Shortener_img.png'
import fileStorageSystemImg from '../assets/images/project_file_storage_img.jpg'
import heartAnalyzerImg from '../assets/images/project_heart_beat_img.jpg'
import womenSafetyAppImg from '../assets/images/project_women_safety_app_img.png'
import petrolPumbManagementImg from "../assets/images/project_petrol_pump_img.jpg"
import { useEffect } from 'react';

export const Projects = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const projectCardData = [
        {
          title: "Opti-Gluco",
          description: "A Non-invasive Glucometer which help to continously monitor blood glucose level of a human without finger priking",
          imgUrl: glucometerImg,
          repoURL:'https://github.com/Sanjaisamson/Opti-Gluco-NIO-GM-Main-Project.git'
        },
        {
          title: "URL_Shortner",
          description: "This is a web applivation which helps to easly shorten the long URLs. This will help you to shorten the long urls for sharing ",
          imgUrl: urlShortnerImg,
          repoURL:'https://github.com/Sanjaisamson/URL_shortner.git'
        },
        {
          title: "File Storage System Backend",
          description: "This is a file storage system like a cloud storage system utilizing the local storage. Which will enable a way to store any kind of files easily.This allows users to upload and download files the same as a cloud service.",
          imgUrl: fileStorageSystemImg,
          repoURL:'https://github.com/Sanjaisamson/File_Storage_System.git'
        },
        {
          title: "Heart-Analyzer",
          description: "This is an IoT Device to check the ECG of the human heart and developed a React web application to display the ECG values and predict the condition of the heart using Machine Learning Model.",
          imgUrl: heartAnalyzerImg,
          repoURL:'https://github.com/44R0NS4M/Heart-Beat-Analyzer.git'

        },
        {
          title: "Women-Safety Application",
          description: "This is an Android mobile application that helps individuals send security alerts to their caretakers or family members when faced with a security issue. The app sends SMS alerts to multiple selected contacts, ensuring timely assistance. This was an academic project. Shake detection, also implemented more efficient security features.",
          imgUrl: womenSafetyAppImg,
          repoURL:'https://github.com/Sanjaisamson/safety-application-android.git'

        },
        {
          title: "Petrol Pumb Management System",
          description: "This is a Petrol pump management system using java, using NetBeans and JDBC. This project enables an efficient way for employees or owners to manage the stock, get the daily and monthly report of sales in an auto generating manner.",
          imgUrl: petrolPumbManagementImg,
          repoURL:'https://github.com/Sanjaisamson/petrol_pumb_management_system.git'

        },
      ];

    return(
        <div className="projectsContainer">
            <div className="projects-card-glass-box">
                <div>
                    <h1 style={{color:"white", fontFamily:"sans-serif", fontSize:80}}>Projects</h1>
                </div>
                <div className="cardbody">
                    {projectCardData.map((card, index) => (
                    <Card 
                    key={index} title={card.title} imgUrl={card.imgUrl} description={card.description} repoURL={card.repoURL} />
                    ))}
                </div>
          </div>
    </div>
    )
}