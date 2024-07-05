import react, {useRef} from React;
function getHover() {
    const [useRef, hovering] = useHover();
}


function useHover() {
    const ref= useRef(null);
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    useEffect(() => {
        const node = ref.current;
        if(node) {
            node.addEventListener('mouseenter', handleMouseOver);
            node.addEventListener('mouseleave', handleMouseLeave);
            return () => {
               node.removeEventListener('mouseenter', handleMouseOver);
                node.removeEventListener('mouseleave', handleMouseLeave); 
            }
        }
    }, [ref.current])
    return [ref, hover];
}