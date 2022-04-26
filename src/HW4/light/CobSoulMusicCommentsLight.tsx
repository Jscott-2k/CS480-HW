import React, { FC } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import '../CobSoulMusic.css';
import CobSoulMusicAdsColumnLight from './CobSoulMusicAdsColumnLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

interface CobSoulMusicCommentsLightProps {

}

interface CobSoulMusicCommentsLightStates {

}
export default class CobSoulMusicCommentsLight extends React.Component<CobSoulMusicCommentsLightProps, CobSoulMusicCommentsLightStates>{

    render(): React.ReactNode {
        return (
            <div className='HW4-Flex HW4-JustifySpaceEvenly  HW4-CommentsLight'>
                <div className='HW4-Flex'>
                <CobSoulMusicAdsColumnLight ads={[
                    "ad2.png", "ad3.jpg"
                ]}></CobSoulMusicAdsColumnLight> 

                </div>
                <div className='HW4-CommentsSectionLight'>
                    <Comment.Group size='massive'>
                        <Header as='h1' dividing>
                            Leave a Comment!
                        </Header>

                        <Form reply>
                            <Form.TextArea/>
                            <Button content='Submit' labelPosition='left' icon='edit' primary />
                        </Form>
                    </Comment.Group>
                </div>
                
                <div className='HW4-Flex'>
                <CobSoulMusicAdsColumnLight ads={[
                    "ad1.png"
                ]}></CobSoulMusicAdsColumnLight>
                </div>
        </div>);
    }
}