import sys
f = r"D:\data\obsidian\first\blogs\github教程\01入门篇\02-探索与发现.md"
with open(f, "rb") as fp:
    raw = fp.read()
text = raw.decode("utf-8")
if text[0] == "\ufeff":
    text = text[1:]
result_bytes = bytearray()
failures = []
for i, ch in enumerate(text):
    try:
        gbk_bytes = ch.encode("gbk")
        result_bytes.extend(gbk_bytes)
    except:
        failures.append(ch)
print(f"Total: {len(text)}, Failed: {len(failures)}, Bytes: {len(result_bytes)}")
print(f"Failure chars: {sorted(set(failures), key=ord)[:20]}")
# Check first 50 bytes of result
print(f"First 50 result bytes: {result_bytes[:50].hex()}")
