import styled from '@emotion/styled'



const SummaryList = () => {
    return (
        <StyledSummaryList>
            <li>💻 Front End Developer / Software Engineer.</li>
            <li>🚀 Learning Full Stack Development &amp; App Development.</li>
            <li>👨‍💼 Management experience. Leadership qualities.</li>
            <li>🎨 Eye for UI/UX Design.</li>
            <li>🧙‍♂️ SEO &amp; Digital Marketing expertise.</li>
            <li>🎧 Audio engineering &amp; music production background.</li>
            <li>🎬 Video &amp; animation.</li>
            <li>💯 Passionate, charismatic &amp; creative.</li>
            <li>🔥 Multi-talented, self-motivated.</li>
            {/* <li>🦜 Parrot owner.</li> */}
        </StyledSummaryList>
    )
}

const StyledSummaryList = styled.ul`
    li {
        list-style: none;
    }

`

export default SummaryList


