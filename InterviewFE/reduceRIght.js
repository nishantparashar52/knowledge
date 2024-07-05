function reduceRight([...fn], defaultVal) {
    fn.reduceRight((acc, curr) => curr(acc), defaultVal);
}