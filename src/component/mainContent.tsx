import BodyCard from './BodyCard';
import Grid from '@mui/material/Grid';

function mainContent(){
    return (
        <Grid container spacing={1} justifyContent="center">
                <Grid size={3}>
                <BodyCard
                pretitle="所属大学"
                title="和歌山大学大学院"
                image="https://www.wakayama-u.ac.jp/_files/00488693/mark01.gif"
                link="https://www.wakayama-u.ac.jp/"
                />
                <BodyCard
                pretitle="おおまかな研究内容"
                title="LLMを用いたソフトウェア保守効率化"
                image="https://t4.ftcdn.net/jpg/07/56/11/69/360_F_756116963_MKdL7O7BKH1ZHicpGXHd9ys9xDMhkGr2.jpg"
                link=""
                />
                </Grid>
                <Grid size={3}> 
                <BodyCard
                pretitle="所属学部"
                title="システム工学研究科"
                image="https://www.wakayama-u.ac.jp/_files/00565745/about-gradsys.jpg"
                link="https://www.wakayama-u.ac.jp/sys/grad_sys/"
                />
                <BodyCard
                pretitle="使用言語"
                title="React.js, Python等"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                link=""
                />
                </Grid>
                <Grid size={3}>
                <BodyCard
                pretitle="所属研究室"
                title="オープンソースソフトウェア研究室"
                image="https://researchers.center.wakayama-u.ac.jp/html/img/100000576"
                link="http://floss-lab.org/"
                />
                <BodyCard
                pretitle="その他"
                title="githubへのリンク"
                image="https://crowdworks.jp/times/wp-content/uploads/2023/01/AdobeStock_385949189-1.jpeg"
                link="https://github.com/tanimoto023342"
                />
                </Grid>
            </Grid>
    )
}

export default mainContent