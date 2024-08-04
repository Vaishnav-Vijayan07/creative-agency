import React from 'react'
import styles from '../../../styles/BlogDetails.module.scss'

const page = () => {
    return (
        <main className={styles.detailed_blogs}>
            <div className={styles.video_container}>
                <video autoPlay muted loop  playsInline poster="/images/background.png" className={styles.video} id="background-video">
                    <source src="/video/bg_video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={styles.content}>
                <p className={styles.aboutus_para}>Articles, Events, News</p>
                <h1>Blogs</h1>
            </div>

            <div className={styles.details_container}>
                <img src="/blogs/details.png" alt="" />

                <h1>There are many variations of passages of Lorem Ipsum available</h1>
                <h6>By Admin, on Jan 03, 2024 | 1 days ago</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur. Urna pretium quis egestas vestibulum. Tincidunt tellus sit consequat libero tortor faucibus lacus. Proin faucibus egestas sed dictumst. Convallis vulputate nunc pellentesque tortor sed diam odio orci. Arcu sit ut risus aenean sed aliquet. Dui vulputate tincidunt nulla quam urna ultricies id. Ac tellus amet semper et dictumst elementum sit at. Ultrices habitant vel mi at. Sed id bibendum nisi suspendisse non nisi tortor eu condimentum. Et volutpat suscipit cursus urna fermentum. In tincidunt dictumst faucibus faucibus sit pretium mollis faucibus. Amet turpis nisl et posuere. Nunc massa faucibus in commodo mauris diam orci. Ipsum adipiscing consequat ut mattis adipiscing eget lectus vestibulum. Nullam cursus vitae auctor aliquam in sollicitudin gravida nisi. Non donec commodo dolor quis risus proin blandit. Enim sed egestas ligula integer posuere nisl vitae mattis. Integer varius morbi morbi arcu libero eget sed semper. Lacus adipiscing massa metus tincidunt tellus morbi quis. Sed molestie amet viverra sapien varius enim et. Vitae pulvinar ut et massa. Massa congue dui suspendisse sagittis bibendum. Sed sit lectus sed vitae libero augue pellentesque malesuada auctor. Natoque bibendum tellus duis amet vitae posuere et scelerisque. Luctus turpis tortor sollicitudin suspendisse sed sagittis orci. Facilisi nibh lorem maecenas diam habitant aenean. Magna faucibus vivamus vulputate risus pellentesque quis mi dui. Urna eleifend euismod dignissim tellus nulla curabitur cursus duis sit. Magnis turpis arcu diam integer curabitur augue aliquam ipsum vitae. Lectus nisl potenti cras ultrices varius dolor pulvinar at interdum. Vel a rhoncus sem quis quis ultricies vel quam amet. Amet integer scelerisque et id euismod at lectus ullamcorper duis. Massa enim eget lobortis ornare nunc adipiscing. Consequat venenatis nunc felis id. Felis tellus vehicula viverra nisl sit vitae amet nisl. Enim diam vitae fringilla leo. Malesuada volutpat in in ultrices. Quis massa habitant ipsum aliquet facilisis egestas tristique est condimentum. Leo egestas elementum in sit. Tellus urna ipsum elit cras molestie eu in quis in. Odio viverra mauris non viverra. Duis ipsum adipiscing habitant fermentum. Suscipit lectus suspendisse at at. Elementum dolor non nam quam porttitor felis. Arcu pellentesque tempus cras eu. Pulvinar nisl odio non vestibulum massa. Netus enim eget sapien sed massa volutpat adipiscing. Velit commodo eu enim vitae est. Maecenas nec dignissim eu urna fames. Pulvinar facilisi vestibulum id condimentum nibh auctor. Amet neque iaculis ipsum elementum facilisi sit. Pellentesque vitae feugiat consequat aliquet augue facilisi urna auctor in. Diam tristique placerat cursus nisl nunc pellentesque convallis odio. Non nunc felis pretium enim suscipit vestibulum eget consectetur. Laoreet in blandit quam quis. Congue lorem pellentesque justo consequat ac. In magna lacus nisl venenatis. Massa dolor posuere feugiat at. Netus ultricies arcu diam tellus suspendisse. Dictum commodo aliquet turpis risus magna quam scelerisque enim. Nibh vitae elementum rhoncus fames morbi tincidunt fusce nulla. Et vulputate mus mus sed sed sagittis. Duis enim fermentum felis lacus purus id sodales faucibus nisl. Euismod elit volutpat purus vitae vestibulum elit risus. Non eu orci consequat pellentesque in. Quam neque ac ornare adipiscing tristique at odio. Rhoncus ultrices ac malesuada et congue. Egestas blandit placerat libero etiam non quis dolor molestie. Vulputate amet arcu purus tempus senectus. Sit aliquet sapien dolor convallis. At tempus enim in duis ultricies tortor eget faucibus massa. Nec purus phasellus ullamcorper libero. Eget at facilisi venenatis enim tempus magna velit sit non. Interdum potenti eu ac nec velit fusce cras condimentum. Dignissim sit dictum rhoncus at amet venenatis feugiat. Justo id sit orci pharetra vel leo. Nibh integer sed enim turpis neque enim nunc elit hendrerit. Nunc cursus malesuada diam enim quis sit. Ac ligula tortor varius tellus mauris. Leo purus nulla faucibus suspendisse. Scelerisque quam leo commodo varius volutpat amet rhoncus. Diam dignissim mattis eget sapien. Mauris at convallis mauris in feugiat facilisis egestas sit. Tincidunt ultricies pellentesque viverra dictum diam egestas. Turpis aliquam dui lectus suspendisse. Ut cursus donec maecenas consequat. Habitant nulla maecenas et orci nunc aliquam. Pharetra malesuada faucibus quam pellentesque nulla sem amet viverra. Scelerisque ornare etiam tincidunt aliquam. Aliquet mattis purus sem aliquam ultrices. Turpis adipiscing.
                </p>
            </div>

            <div className={styles.recent_blogs}>
                <h3>Recent Posts</h3>

                <div className={styles.card_list}>
                    <div className={styles.card}>
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card}>
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>

                    <div className={styles.card}>
                        <img src='/blogs/1.png' alt='' />
                        <h5>There are many variations of passages </h5>
                        <h6>Jan 03, 2024   |   1 day ago</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...</p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default page