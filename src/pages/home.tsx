import React, {Fragment} from 'react';
import HomeBanner from "./home/homeBanner";
import Process from "./home/process";
import ContactForm from "./home/contactForm";


function Home() {
    return (
        <Fragment>
            <HomeBanner />
            <Process />
            <ContactForm />
        </Fragment>
    );
}

export default Home;
