import React, { FC } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import '../CobSoulMusic.css';
import CobSoulMusicAdsColumnDark from './CobSoulMusicAdsColumnDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

interface CobSoulMusicCommentsDarkProps {

}

interface CobSoulMusicCommentsDarkStates {

}
export default class CobSoulMusicCommentsDark extends React.Component<CobSoulMusicCommentsDarkProps, CobSoulMusicCommentsDarkStates>{

    render(): React.ReactNode {
        return (
            <div className='HW4-Flex HW4-JustifySpaceEvenly  HW4-Comments'>
                <div className='HW4-Flex'>
                <CobSoulMusicAdsColumnDark ads={[
                    "fakedownload1.png", "ad2.png", "ad3.jpg", "fakedownload2.png"
                ]}></CobSoulMusicAdsColumnDark>

                </div>
                <div className='HW4-CommentsSection'>
                    <Comment.Group size='large'>
                        <Header as='h3' dividing>
                            Featured Comments
                        </Header>

                        <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Definitely Larry Page</Comment.Author>
                                <Comment.Metadata>
                                    <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>How Artistic! Maybe Google should aquire Cob's Co.!</Comment.Text>
                            </Comment.Content>
                        </Comment>

                        <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                <Comment.Metadata>
                                    <div>Yesterday at 12:30AM</div>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <p>This has been very useful. Thanks!</p>
                                </Comment.Text>
                            </Comment.Content>
                            <Comment.Group>
                                <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Definitely Bill Gates</Comment.Author>
                                        <Comment.Metadata>
                                            <div>Just now</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Comment>

                        <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Definitely Gabe Newel</Comment.Author>
                                <Comment.Metadata>
                                    <div>5 days ago</div>
                                </Comment.Metadata>
                                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            </Comment.Content>
                        </Comment>

                        <Form reply>
                            <Form.TextArea/>
                            <Button content='Submit Comment' labelPosition='left' icon='edit' primary />
                        </Form>
                    </Comment.Group>
                </div>
                
                <div className='HW4-Flex'>
                <CobSoulMusicAdsColumnDark ads={[
                    "ad1.png"
                ]}></CobSoulMusicAdsColumnDark>
                </div>
                </div>);
    }
}