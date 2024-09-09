import React from "react";
import Profile from "../organisms/Profile";
import NextUp from "../organisms/NextUp";
import About from "../organisms/About";
import Members from "../organisms/Members";
import PastMeetUp from "../organisms/PastMeetUp";

export default class MainTemplate extends React.Component {
    constructor() {
        super()
        this.state = {
            profile: {
                title: 'Meetup Hacktiv8',
                location: 'Jakarta, Indonesia',
                members: '1,078',
                organizers: 'Adhy Wiranata',
                url: 'https://files.klob.id/public/mig01/l3aukxgu/BAedfmOT_400x400.jpg'
            },
            next_up: {
                title: 'Next Meetup',
                subtitle: 'Awesome meetup and event',
                date: '06 September 2024',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint est perferendis assumenda doloremque quam delectus enim aut nesciunt iusto rerum temporibus maxime, odio non quisquam ipsa fuga, cum dolorum."
            },
            about: {
                title: 'About Meetup',
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum eligendi dolores totam officia dolore alias consequatur. Impedit consequatur quae illum voluptatum vero, deserunt rerum quam cum explicabo, excepturi non. Quia?"
            },
            members: {
                title: 'Members',
                url: 'https://files.klob.id/public/mig01/l3aukxgu/BAedfmOT_400x400.jpg',
                organizer: 'Adhy Wiranata'
            },
            past_meet_up: {
                title: 'Past Meetups',
                card_content: [{
                    date: '27 September 2024',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique eveniet labore. Doloribus illum, quam, aut ea ullam odio saepe fugit quod a eveniet laboriosam doloremque possimus, quos nobis nostrum?',
                    buttonName: 'View'
                },{
                    date: '27 September 2024',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique eveniet labore. Doloribus illum, quam, aut ea ullam odio saepe fugit quod a eveniet laboriosam doloremque possimus, quos nobis nostrum?',
                    buttonName: 'View'
                },{
                    date: '27 September 2024',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur similique eveniet labore. Doloribus illum, quam, aut ea ullam odio saepe fugit quod a eveniet laboriosam doloremque possimus, quos nobis nostrum?',
                    buttonName: 'View'
                }]
            }
        }
    }
    render() {
        return (
            <>
                <div className="card px-4 py-4">
                    <Profile
                        title={this.state.profile.title}
                        location={this.state.profile.location}
                        members={this.state.profile.members}
                        organizers={this.state.profile.organizers}
                        url={this.state.profile.url}
                    />
                </div>

                <NextUp title={this.state.next_up.title}
                    subtitle={this.state.next_up.subtitle}
                    date={this.state.next_up.date}
                    content={this.state.next_up.content} />


                <About title={this.state.about.title}
                    content={this.state.about.content} />


                <Members title={this.state.members.title}
                    url={this.state.members.url}
                    organizer={this.state.members.organizer} />


                <PastMeetUp title={this.state.past_meet_up.title}
                    cardContent={this.state.past_meet_up.card_content} />
            </>
        )
    }

}